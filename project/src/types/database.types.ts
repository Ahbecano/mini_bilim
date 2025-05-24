export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: number
          title: string
          description: string
          steps: Json
          materials: Json
          age_range: string
          difficulty: 'Kolay' | 'Orta' | 'Zor'
          category: string
          image_url: string
          created_at: string
        }
        Insert: {
          id?: number
          title: string
          description: string
          steps: Json
          materials: Json
          age_range: string
          difficulty: 'Kolay' | 'Orta' | 'Zor'
          category: string
          image_url: string
          created_at?: string
        }
        Update: {
          id?: number
          title?: string
          description?: string
          steps?: Json
          materials?: Json
          age_range?: string
          difficulty?: 'Kolay' | 'Orta' | 'Zor'
          category?: string
          image_url?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}