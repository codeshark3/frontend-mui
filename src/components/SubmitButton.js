import React from "react";
import AppButton from "./AppButton";
import { useNetInfo } from "@react-native-community/netinfo";
import { useFormikContext } from "formik";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  const netInfo = useNetInfo();
  return <AppButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
