import FileOpenIcon from '@mui/icons-material/FileOpen';
import { Button, Checkbox, Link, TextField, Typography } from '@mui/material';
import React, { FormEvent, useState } from 'react';

interface FormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [aadharFile, setAadharFile] = useState<File | null>(null);
  const [panFile, setPanFile] = useState<File | null>(null);
  const [addressProofFile, setAddressProofFile] = useState<File | null>(null);

  const openFileDialog = (setter: React.Dispatch<React.SetStateAction<File | null>>) => {
    return () => {
      document.getElementById('file-input')?.click();
      setFileSetter(setter);
    };
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, setter: React.Dispatch<React.SetStateAction<File | null>>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setter(droppedFile);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<File | null>>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setter(selectedFile);
    }
  };

  const [fileSetter, setFileSetter] = useState<React.Dispatch<React.SetStateAction<File | null>>>(() => () => {});

  return (
    <div>
      <Typography variant="h5">Director Information</Typography><br />
      <Typography variant="h6">Director 1</Typography>
      <Typography>Upload Aadhar Card</Typography>
      <form onSubmit={onSubmit}>
        <div style={{ position: 'relative' }}>
          <TextField
            id="aadhar-file"
            variant="outlined"
            type="text"
            fullWidth
            margin="none"
            inputProps={{ style: { fontSize: '16px', height: '75px' } }}
            onClick={openFileDialog(setAadharFile)}
            onDrop={(event) => handleDrop(event, setAadharFile)} // Handle drop event
            onDragOver={(event) => event.preventDefault()} // Prevent default behavior on drag over
            InputProps={{
              style: { border: '2px dotted grey', padding: '8px' },
              endAdornment: (
                <div style={{ position: 'absolute', top: '60%', right: '300px', transform: 'translateY(-50%)' }}>
                  <FileOpenIcon
                    sx={{ cursor: 'pointer' }}
                    onClick={openFileDialog(setAadharFile)}
                  />
                  {aadharFile && <span>{aadharFile.name}</span>}
                  <Typography variant="caption" style={{ display: 'block', marginTop: '8px' }}>Drag and Drop File here</Typography>
                  <Link
                    component="button"
                    variant="caption"
                    style={{ display: 'block', marginTop: '8px' }}
                    onClick={openFileDialog(setAadharFile)}
                  >
                    Choose File
                  </Link>
                </div>
              ),
            }}
          />
          <br /><br />
          <Typography>Upload PAN Card</Typography>
          <TextField
            id="pan-file"
            variant="outlined"
            type="text"
            fullWidth
            margin="none"
            inputProps={{ style: { fontSize: '16px', height: '75px' } }}
            onClick={openFileDialog(setPanFile)}
            onDrop={(event) => handleDrop(event, setPanFile)} // Handle drop event
            onDragOver={(event) => event.preventDefault()} // Prevent default behavior on drag over
            InputProps={{
              style: { border: '2px dotted grey', padding: '8px' },
              endAdornment: (
                <div style={{ position: 'absolute', top: '60%', right: '300px', transform: 'translateY(-50%)' }}>
                  <FileOpenIcon
                    sx={{ cursor: 'pointer' }}
                    onClick={openFileDialog(setPanFile)}
                  />
                  {panFile && <span>{panFile.name}</span>}
                  <Typography variant="caption" style={{ display: 'block', marginTop: '8px' }}>Drag and Drop File here</Typography>
                  <Link
                    component="button"
                    variant="caption"
                    style={{ display: 'block', marginTop: '8px' }}
                    onClick={openFileDialog(setPanFile)}
                  >
                    Choose File
                  </Link>
                </div>
              ),
            }}
          />
          <br /><br />
          <Typography>Upload Address Proof Document</Typography>
          <TextField
            id="address-proof-file"
            variant="outlined"
            type="text"
            fullWidth
            margin="none"
            inputProps={{ style: { fontSize: '16px', height: '75px' } }}
            onClick={openFileDialog(setAddressProofFile)}
            onDrop={(event) => handleDrop(event, setAddressProofFile)} // Handle drop event
            onDragOver={(event) => event.preventDefault()} // Prevent default behavior on drag over
            InputProps={{
              style: { border: '2px dotted grey', padding: '8px' },
              endAdornment: (
                <div style={{ position: 'absolute', top: '60%', right: '300px', transform: 'translateY(-50%)' }}>
                  <FileOpenIcon
                    sx={{ cursor: 'pointer' }}
                    onClick={openFileDialog(setAddressProofFile)}
                  />
                  {addressProofFile && <span>{addressProofFile.name}</span>}
                  <Typography variant="caption" style={{ display: 'block', marginTop: '8px' }}>Drag and Drop File here</Typography>
                  <Link
                    component="button"
                    variant="caption"
                    style={{ display: 'block', marginTop: '8px' }}
                    onClick={openFileDialog(setAddressProofFile)}
                  >
                    Choose File
                  </Link>
                </div>
              ),
            }}
          />
          <br /><br />
          <Button
            variant="contained"
            sx={{
              color: 'purple',
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: 'purple',
                color: 'white',
              }, textTransform: 'none'
            }}
          >
            Add Director
          </Button><br />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox color="primary" />
            <Typography variant="body1">I hereby certify that all information provided in this is true, complete, and accurate to the best of my knowledge</Typography>
          </div>
          <input
            type="file"
            id="file-input"
            name="file"
            onChange={(event) => handleFileChange(event, fileSetter)}
            style={{ display: 'none' }}
          />
        </div>
        <Button type="submit" variant="contained" color="secondary" style={{ marginTop: '16px', left: '1000px' }}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Form;
