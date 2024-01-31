import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import LeftDrawer from '../components/LeftDrawer';
import {
    Button,
    Grid,
    TextField,
    Stepper,
    Step,
    StepLabel,
    Paper,
    Typography,
    ThemeProvider,
    createTheme,
} from '@mui/material';
import ThankYouPage from './ThankYouPage';
import SuccessPopup from './SuccessPopup';

const darkTheme = createTheme({
    palette: {
        mode: "light"
    },
});

const steps = ['Personal Details', 'Address', 'Additional Info', 'Payment Details'];

const Form = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        tenthMarks: '',
        twelfthMarks: '',
        achievements: '',
        cardHolderName: '',
        cardNumber: '',
        bankName: '',
        expiryDate: '',
        cvv: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleChange = (field, value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [field]: value,
        }));
    };

    const handleSubmit = () => {
        localStorage.setItem('formData', JSON.stringify(formData));
        setSubmitted(true);
        setShowPopup(true);
    };

    const resetForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            streetAddress: '',
            city: '',
            state: '',
            zipCode: '',
            tenthMarks: '',
            twelfthMarks: '',
            achievements: '',
            cardHolderName: '',
            cardNumber: '',
            bankName: '',
            expiryDate: '',
            cvv: '',
        });
        setSubmitted(false);
        setActiveStep(0);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    const isStepInvalid = () => {
        switch (activeStep) {
            case 0:
                return !formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber || !formData.studyingYear || !formData.degreePursuing || !formData.college;
            case 1:
                return !formData.streetAddress || !formData.city || !formData.state || !formData.zipCode;
            case 2:
                return !formData.tenthMarks || !formData.twelfthMarks;
            case 3:
                return !formData.cardHolderName || !formData.cardNumber || !formData.bankName || !formData.expiryDate || !formData.cvv;
            default:
                return false;
        }
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="First Name"
                                type="text"
                                fullWidth
                                value={formData.firstName}
                                onChange={(e) => handleChange('firstName', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Last Name"
                                type="text"
                                fullWidth
                                value={formData.lastName}
                                onChange={(e) => handleChange('lastName', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Email"
                                type="email"
                                fullWidth
                                value={formData.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Phone Number"
                                type="tel"
                                fullWidth
                                value={formData.phoneNumber}
                                onChange={(e) => handleChange('phoneNumber', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Date of Birth"
                                type="date"
                                fullWidth
                                value={formData.dob}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Studying Year"
                                type="number"
                                fullWidth
                                value={formData.studyingYear}
                                onChange={(e) => handleChange('studyingYear', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Degree Pursuing"
                                fullWidth
                                value={formData.degreePursuing}
                                onChange={(e) => handleChange('degreePursuing', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="College"
                                fullWidth
                                value={formData.college}
                                onChange={(e) => handleChange('college', e.target.value)}
                            />
                        </Grid>
                    </Grid>
                );
            case 1:
                return (
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Street Address"
                                fullWidth
                                value={formData.streetAddress}
                                onChange={(e) => handleChange('streetAddress', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="City"
                                fullWidth
                                value={formData.city}
                                onChange={(e) => handleChange('city', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="State"
                                fullWidth
                                value={formData.state}
                                onChange={(e) => handleChange('state', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Zip Code"
                                type="number"
                                fullWidth
                                value={formData.zipCode}
                                onChange={(e) => handleChange('zipCode', e.target.value)}
                            />
                        </Grid>
                    </Grid>
                );
            case 2:
                return (
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="10th Marks"
                                type="number"
                                fullWidth
                                value={formData.tenthMarks}
                                onChange={(e) => handleChange('tenthMarks', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="12th Marks"
                                type="number"
                                fullWidth
                                value={formData.twelfthMarks}
                                onChange={(e) => handleChange('twelfthMarks', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Achievements"
                                fullWidth
                                multiline
                                rows={4}
                                value={formData.achievements}
                                onChange={(e) => handleChange('achievements', e.target.value)}
                            />
                        </Grid>
                    </Grid>
                );
            case 3:
                return (
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Card Holder's Name"
                                fullWidth
                                value={formData.cardHolderName}
                                onChange={(e) => handleChange('cardHolderName', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Card Number"
                                type="number"
                                fullWidth
                                value={formData.cardNumber}
                                onChange={(e) => handleChange('cardNumber', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Bank Name"
                                fullWidth
                                value={formData.bankName}
                                onChange={(e) => handleChange('bankName', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Expiry Date"
                                type="date"
                                fullWidth
                                value={formData.expiryDate}
                                onChange={(e) => handleChange('expiryDate', e.target.value)}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="CVV"
                                type="number"
                                fullWidth
                                value={formData.cvv}
                                onChange={(e) => handleChange('cvv', e.target.value)}
                            />
                        </Grid>
                    </Grid>
                );
            default:
                return 'Unknown step';
        }
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', marginTop: '6%' }}>
                <Navbar />
                <div style={{ display: 'flex', flexGrow: 1 }}>
                    <LeftDrawer />
                    <div style={{ flex: 1, padding: '20px' }}>
                        {submitted ? (
                            <ThankYouPage formData={formData} />
                        ) : (
                            <>
                                <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', borderRadius: '25px' }}>
                                    <Stepper activeStep={activeStep} alternativeLabel orientation="horizontal">
                                        {steps.map((label) => (
                                            <Step key={label}>
                                                <StepLabel>{label}</StepLabel>
                                            </Step>
                                        ))}
                                    </Stepper>
                                </Paper>

                                <div style={{ marginTop: '20px' }}>
                                    <Typography variant="h5" gutterBottom>
                                        {steps[activeStep]}
                                    </Typography>
                                    <form>
                                        {getStepContent(activeStep)}
                                        <div style={{ marginTop: '20px' }}>
                                            <Button disabled={activeStep === 0} onClick={handleBack}>
                                                Back
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                                                disabled={isStepInvalid()}
                                            >
                                                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </>
                        )}
                    </div>
                    {showPopup && <SuccessPopup onClose={handlePopupClose} />}
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Form;
