import {Add, Delete, Download, Edit, Visibility} from '@mui/icons-material';
import {
  Button,
  Card,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Modal,
  Box,
  Typography,
  autocompleteClasses,
} from '@mui/material';
import {Container} from '@mui/system';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import * as React from 'react';
import {rows} from './mockdata';

const columns: GridColDef[] = [
  {field: 'title', headerName: 'Title', flex: 2},
  {field: 'description', headerName: 'Description', flex: 4},
  {
    field: 'uploadDate',
    headerName: 'Upload Date',
    flex: 1,
    valueFormatter: ({value}) => {
      return value.toLocaleDateString('en-US');
    },
  },
  {field: 'fileType', headerName: 'Filetype', flex: 1},
  {
    field: 'actions',
    headerName: 'Actions',
    flex: 1.5,
    renderCell: () => {
      return (
        <Stack direction="row" spacing={2}>
          <Edit />
          <Visibility />
          <Download />
          <Delete />
        </Stack>
      );
    },
  },
];

export default function App() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  // const anchorRef = React.useRef<HTMLButtonElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 'auto',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
  const handleMenuSelect = (event: React.MouseEvent<HTMLElement>) => {
    const {mediaType} = event.currentTarget.dataset;
    setAnchorEl(null);

    // TODO : use mediaType in modal
    handleModalOpen();
  };
  const mediaMenuOpen = Boolean(anchorEl);
  const id = mediaMenuOpen ? 'simple-popper' : undefined;

  // const
  return (
    <Container style={{height: '90vh'}}>
      <Paper style={{padding: '16px'}}>
        <Card>
          <Button
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            <Add />
            Add New Media
          </Button>

          <Menu
            transitionDuration={200}
            onClose={handleModalClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            id={id}
            open={mediaMenuOpen}
            anchorEl={anchorEl}
          >
            <div style={{minWidth: 150}}>
              <MenuItem onClick={handleMenuSelect} data-media-type="video">
                Video
              </MenuItem>
              <MenuItem onClick={handleMenuSelect} data-media-type="pdf">
                PDF
              </MenuItem>
              <MenuItem onClick={handleMenuSelect} data-media-type="image">
                Image
              </MenuItem>
            </div>
          </Menu>

          <Modal
            open={modalOpen}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Card sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{mt: 2}}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Card>
          </Modal>
          <DataGrid
            style={{width: '100%', minHeight: '80vh'}}
            rows={rows}
            columns={columns}
          />
        </Card>
      </Paper>
    </Container>
  );
}
