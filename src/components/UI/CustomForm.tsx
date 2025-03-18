import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Container, Typography} from "@mui/material";
import {ControlledTextField} from "@/components/UI/ControlledTextField";
import {CustomButton} from "@/components/UI/CustomButton";

interface CustomFormProps {
    schema: yup.ObjectSchema<any>;
    defaultValues: any;
    fields: { name: string; label: string; type?: string }[];
    onSubmit: (data: any) => void;
    submitButtonText: string;
    title: string;
}

export const CustomForm: React.FC<CustomFormProps> = ({
  schema,
  defaultValues,
  fields,
  onSubmit,
  submitButtonText,
  title
}) => {
    const {
        handleSubmit,
        control,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues,
    });

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                {title}
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)} style={{display: "grid", gap: "16px"}}>
                {fields.map(({name, label, type}) => (
                    <ControlledTextField key={name} name={name} label={label} type={type} control={control}/>
                ))}

                <CustomButton type="submit" variant="contained" fullWidth>
                    {submitButtonText}
                </CustomButton>
            </form>
        </Container>
    );
};
