import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Userbox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 10,
  marginBottom: 20,
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%)", md: 30 },
        }}
      >
        <Fab color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="#ffffff" p={3} borderRadius={5}>
          <Typography variant="h6" color={"gray"} textAlign="center">
            Create Post
          </Typography>
          <Userbox>
            <Avatar
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              Dhanush
            </Typography>
          </Userbox>
          <TextField
            color="tertiary"
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on you mind?"
            variant="standard"
          />
          <Stack direction={"row"} gap={2} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="success" />
            <VideoCameraBack color="tertiary" />
            <PersonAdd color="dull" />
          </Stack>
          <ButtonGroup
            color="secondary"
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
