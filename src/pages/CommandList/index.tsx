import { useState, useEffect } from "react";
import { Main } from "../../components/styled/containers";
import ReactMarkdown from "react-markdown";
import commands from "./commands.md";
import { styled, Box } from "@mui/material";

function CommandList() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(commands)
      .then((res) => res.text())
      .then((res) => setText(res));
  }, []);
  return (
    <Main>
      <MdContainer sx={{ p: [2, 3] }}>
        <ReactMarkdown>{text}</ReactMarkdown>
      </MdContainer>
    </Main>
  );
}

export default CommandList;

const MdContainer = styled(Box)``;
