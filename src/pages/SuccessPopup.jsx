import React, { useEffect } from 'react';
import { Paper, Typography, styled, Portal, Backdrop, IconButton } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', 
    maxWidth: 300, 
    margin: 'auto', 
    position: 'fixed', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    zIndex: theme.zIndex.modal, 
}));

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    backdropFilter: 'blur(5px)', 
}));

const StyledCloseButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
}));

const StyledTickIcon = styled(CheckCircleOutlineIcon)(({ theme }) => ({
    fontSize: 60,
    color: theme.palette.success.main, 
    marginBottom: theme.spacing(2),
}));

const SuccessPopup = ({ onClose }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            onClose();
        }, 2000); 

        return () => clearTimeout(timeout);
    }, [onClose]);

    return (
        <Portal>
            <StyledBackdrop open={true}>
                <StyledPaper elevation={3}>
                    <StyledCloseButton onClick={onClose}>
                        <CloseIcon />
                    </StyledCloseButton>
                    <StyledTickIcon />
                    <Typography variant="h5" gutterBottom>
                        Submitted successfully!
                    </Typography>
                </StyledPaper>
            </StyledBackdrop>
        </Portal>
    );
};

export default SuccessPopup;
