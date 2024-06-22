import { Typography, Box, Avatar, Stack } from "@mui/material";
import { useState } from "react";

export default function QuestionComments() {
  const [comments, setComments] = useState([
    { id: 1, comment: "hello", name: undefined, profile: "" },
    { id: 2, comment: "hi", name: "أحمد", profile: "" },
    { id: 3, comment: "yes iam here", name: "براء", profile: "" },
    { id: 4, comment: "no i am not here", name: "أحمد", profile: "" },
  ]);

  return (
    <Box p={4}>
      {comments.map((element) => {
        return (
          <Comment
            key={element.id}
            Comment={element.comment}
            CommenterName={element.name}
            profile={element.profile}
          />
        );
      })}
    </Box>
  );
}

// eslint-disable-next-line react/prop-types
function Comment({ Comment, CommenterName, profile }) {
  if (CommenterName == undefined) {
    return (
      <Stack direction="row" gap={2} sx={{ direction: "ltr" }}>
        <Avatar src={profile} />
        <Box sx={{
            borderRadius: "5px",
            backgroundColor: "var(--primary)",
            color: "white",
            display:'inline',
            padding:'10px 15px'
          }}>
        <Typography
          variant="string"
        >
          {Comment}
        </Typography>

        </Box>
      </Stack>
    );
  }
  return (
    <Box m={1} mb={3}>
      <Stack direction="row" gap={2}>
        <Avatar src={profile} />
        <Typography variant="subtitle1"> {CommenterName}</Typography>
      </Stack>
      <Box m={1} mr={7} sx={{
            borderRadius: "5px",
            backgroundColor: "var(--primary)",
            color: "white",
            display:'inline',
            padding:'5px 15px'
          }}>
        <Typography
          
          variant="string"
        >
          {Comment}
        </Typography>
      </Box>
    </Box>
  );
}
