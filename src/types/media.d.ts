export interface Media {
  id: string;
  title: string;
  description: string;
  uploadDate: Date;
  fileType: 'video' | 'document' | 'image';
  fileSize: number;
}
