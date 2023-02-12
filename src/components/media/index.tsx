import {Paper, Stack} from '@mui/material';
import {Media} from '../../types/media';

export const MediaRow: React.FC<Media> = (props) => {
  return (
    <Stack direction="row">
      <span>{props.title}</span>
      <span>{props.description}</span>
      <span>{props.uploadDate.toLocaleDateString('en-US')}</span>
      <span>{props.fileType}</span>
      <span>{props.fileSize}</span>
    </Stack>
  );
};
