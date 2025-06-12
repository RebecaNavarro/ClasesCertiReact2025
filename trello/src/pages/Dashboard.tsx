import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";

import { CustomCard } from "../components/Card";
import { CustomDialogs } from "../components/Dialog";
import { useProjects } from "../hooks/useProjects";


function DashboardPage() {
  
  const { t } = useTranslation();

  const {
    removeProject,
    projects,
    formik,
    openDialog,
    closeDialogHandler,
    openDialogHandler,
    goToProject,
    editProjectHandler,
    project
  } = useProjects();

  return (
    <Container maxWidth="lg">
      <CustomDialogs
        title={
          project
            ? t("dashboard.edit_project")
            : t("dashboard.add_project")
        }
        open={openDialog}
        onClose={closeDialogHandler}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          label={t("dashboard.project_name")}
          id="projectName"
          value={formik.values.projectName}
          onChange={formik.handleChange}
          error={
            formik.touched.projectName && Boolean(formik.errors.projectName)
          }
          helperText={formik.touched.projectName && formik.errors.projectName}
        />
      </CustomDialogs>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={4}
        mb={4}
      >
        <Typography variant="h6" fontWeight="bold">
          {t("dashboard.title")}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={openDialogHandler}
        >
          {t("dashboard.add_project")}
        </Button>
      </Box>

      <Grid
        container
        spacing={2}
        sx={{
          marginTop: 2,
        }}
      >
        {projects.length > 0 ? (
          projects.map((project) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <CustomCard
                action={() => {
                  goToProject(project.id);
                }}
                description={project.description}
                title={project.name}
                project={project}
                deleteProject={() => removeProject(project.id)}
                editProject={() => editProjectHandler(project)}
              />
            </Grid>
          ))
        ) : (
          <p>{t("dashboard.no_projects")}</p>
        )}
      </Grid>
    </Container>
  );
}

export default DashboardPage;