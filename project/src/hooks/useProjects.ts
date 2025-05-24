import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Project } from '../types';

export const useProjects = (category?: string, searchQuery?: string) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        
        let query = supabase
          .from('projects')
          .select('*');
        
        if (category && category !== 'all') {
          query = query.eq('category', category);
        }
        
        if (searchQuery) {
          query = query.or(`title.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`);
        }
        
        const { data, error } = await query;
        
        if (error) {
          throw error;
        }
        
        const typedData = data.map((project) => ({
          ...project,
          steps: project.steps as unknown as string[],
          materials: project.materials as unknown as string[]
        }));
        
        setProjects(typedData);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err instanceof Error ? err : new Error('Unknown error occurred'));
      } finally {
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, [category, searchQuery]);
  
  return { projects, loading, error };
};

export const useProject = (id: number) => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('id', id)
          .single();
        
        if (error) {
          throw error;
        }
        
        const typedData = {
          ...data,
          steps: data.steps as unknown as string[],
          materials: data.materials as unknown as string[]
        };
        
        setProject(typedData);
      } catch (err) {
        console.error('Error fetching project:', err);
        setError(err instanceof Error ? err : new Error('Unknown error occurred'));
      } finally {
        setLoading(false);
      }
    };
    
    if (id) {
      fetchProject();
    }
  }, [id]);
  
  return { project, loading, error };
};

export const useRelatedProjects = (category: string, currentId: number) => {
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const fetchRelatedProjects = async () => {
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('category', category)
          .neq('id', currentId)
          .limit(3);
        
        if (error) {
          throw error;
        }
        
        const typedData = data.map((project) => ({
          ...project,
          steps: project.steps as unknown as string[],
          materials: project.materials as unknown as string[]
        }));
        
        setRelatedProjects(typedData);
      } catch (err) {
        console.error('Error fetching related projects:', err);
        setError(err instanceof Error ? err : new Error('Unknown error occurred'));
      } finally {
        setLoading(false);
      }
    };
    
    if (category && currentId) {
      fetchRelatedProjects();
    }
  }, [category, currentId]);
  
  return { relatedProjects, loading, error };
};