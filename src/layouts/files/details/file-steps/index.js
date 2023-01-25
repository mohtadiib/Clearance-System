import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";
import {errorMessage, succesMessage} from "../../../../components/Notifications";
import {updateCurrentStep, updateFileStatus} from "../api/update_file";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';

export default function FileSteps({steps,fileId,currentStep,fileStatus}) {
    const [activeStep, setActiveStep] = useState(0);
    const [fileClosed, setFileClosed] = useState(+fileStatus === 1);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{

        var BreakException = {};

        try {
            steps.forEach((val,index)=> {
                console.log(val.id);
                console.log(val.done);
                console.log("index");
                console.log(index);
                if (!val.done) throw BreakException;
                setActiveStep(index)
            })
        } catch (e) {
            if (e !== BreakException) throw e;
        }



        // steps.forEach((val,index)=>{
        //     // console.log("val.done")
        //     // console.log(val.done)
        //     // console.log("index")
        //     // console.log(index)
        //     if (!val.done){
        //         console.log("val.id")
        //         console.log(val.id)
        //         console.log(val.done)
        //         console.log("index")
        //         console.log(index)
        //         setActiveStep(index)
        //     }
        // })
    },[currentStep])
    const handleNext = () => {
        console.log("steps[activeStep].id")
        console.log(steps[activeStep].id)
        setLoading(true);
        updateCurrentStep(fileId, steps[activeStep].id,()=> {
        setLoading(false);
            succesMessage()
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        },()=>{
        setLoading(false);
            errorMessage()
        })
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleClose = () => {
        setLoading(true);
        updateFileStatus(fileId,1,()=> {
            setLoading(false);
            succesMessage()
            // setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setFileClosed(true);
        },()=>{
            setLoading(false);
            errorMessage()
        })

    };
    return (
        <Box sx={{ maxWidth: 450 }} >
            {typeof fileStatus}
            <Stepper activeStep={activeStep} orientation="vertical" >
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            optional={
                                index === 2 ? (
                                    <Typography variant="caption">الخطوة الاخيرة</Typography>
                                ) : null
                            }
                        >
                            {step.name}
                            {step.done.toString()}
                        </StepLabel>
                        <StepContent>
                            <Typography color="grey" variant="subtitle2">{step.description}</Typography>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        style={{
                                    color:"white"}
                                        }
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'اغلاق الملف' : 'الخطوة التالية'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        رجوع
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    {fileClosed?
                        <Stack direction="row" spacing={1}>
                            <Chip
                                avatar={<DoneIcon />}
                                label="الملف مكتمل"
                                variant="outlined"
                            />
                        </Stack>
                        :<Button style={{color: "white"}} variant="contained" onClick={handleClose} sx={{mt: 1, mr: 1}}>
                        اغلاق الملف
                    </Button>}
                </Paper>
            )}
        </Box>
    );
}
