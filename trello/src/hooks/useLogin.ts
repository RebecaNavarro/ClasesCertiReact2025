import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { useAuthStore } from "../store/authStore";
import { login as loginService } from "../services/authService";
import { t } from "i18next";

const loginSchema = yup.object({
    email: yup
        .string()
        .email(t("login.valid_email"))
        .required(t("login.required_email")),
    password: yup
        .string()
        .min(6, t("login.password_min_length"))
        .required(t("login.required_password")),
});

export const useLogin = () => {
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(false);

    const login = useAuthStore((state) => state.login);
    const formik = useFormik({
        initialValues: {
            email: "beca@gmail.com",
            password: "123456",
        },
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            const responseLogin = await loginService(values.email, values.password);
            if (!responseLogin) {
                setLoginError(true);
                formik.resetForm();
                return;
            }
            // loginContext(responseLogin);
            login(responseLogin);
            navigate("/app/dashboard", {
                replace: true,
            });
        },
    });

    return { formik, loginError, setLoginError };
};