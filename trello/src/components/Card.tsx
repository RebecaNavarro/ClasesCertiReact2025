import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Button,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { memo, useCallback, useMemo, useState } from "react";
import type { Project } from "../interfaces/projectInterface";

interface CustomCardProps {
  title?: string;
  description?: string;
  action?: () => void;
  project?: Project;
  deleteProject: () => void;
  editProject: () => void;
}

const ButtonIncrement = memo(({ setStudents }) => {
  console.log("Estoy aca en el botoncito :o ");
  return (
    <>
      <Button onClick={() => setStudents([2,4])}> Soy Yo</Button>
    </>
  );
});

export const CustomCard = ({
  title,
  description,
  action,
  deleteProject,
  editProject,
}: CustomCardProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [increment, setIncrement] = useState<number>(0);

  const setDecrement = useCallback(() => {
    setIncrement((prevState) => prevState - 1);
  }, []);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const [ students, setStudents] = useState([2, 3, 4, 6, 10, 0, 1]);
  const initialValue = 0;
  const promedio = useMemo(
    ( ()=> { students.reduce((accumulator, currentValue) => {
      console.log(accumulator);
      return accumulator + currentValue;
    }, initialValue)}),
    [students]
  );

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 2,
        border: "1px solid #e0e0e0",
        boxShadow: "none",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box position="relative">
        <CardMedia
          component="img"
          height="160"
          image="https://picsum.photos/200/300"
          alt={title}
          sx={{ objectFit: "cover" }}
        />
        <IconButton
          onClick={handleOpenMenu}
          size="small"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "rgba(255,255,255,0.7)",
            zIndex: 1,
          }}
        >
          <MoreVertIcon fontSize="small" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem
            onClick={(event) => {
              event.stopPropagation();
              editProject();
              handleCloseMenu();
            }}
          >
            <ListItemIcon>
              <EditIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Editar proyecto" />
          </MenuItem>
          <MenuItem
            onClick={(event) => {
              event.stopPropagation();
              deleteProject();
              handleCloseMenu();
            }}
            sx={{ color: "error.main" }}
          >
            <ListItemIcon sx={{ color: "error.main" }}>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Eliminar proyecto" />
          </MenuItem>
        </Menu>
      </Box>
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {description}
        </Typography>
        <Box mt={1} display="flex" justifyContent="flex-start">
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => action && action()}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: "bold",
              px: 3,
            }}
          >
            Ver Proyecto
          </Button>

          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => {
              setIncrement((prevState) => prevState + 1);
            }}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: "bold",
              px: 3,
            }}
          >
            Incrementar
          </Button>
          <ButtonIncrement setStudents={setStudents} />
        </Box>
      </CardContent>
    </Card>
  );
};