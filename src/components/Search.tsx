import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Input,
  Button,
  Tooltip,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import { SearchProps } from "../types";
import { SearchIcon } from "@chakra-ui/icons";

interface Props extends SearchProps {
  value: string;
}

const Search = ({ buttonText, city, handleChange, handleClick }: Props) => {
  return (
    <div>
      <Tooltip label="Search city">
        <Accordion
          defaultIndex={[1]}
          allowMultiple={true}
          sx={{
            width: "360px",
            margin: "0.2rem 0.5rem 2rem 0.5rem",
          }}
        >
          <AccordionItem
            sx={{
              borderRadius: "0.2rem",
              border: 0,
              boxShadow: "2px 5px 5px 1px #3d348b",
            }}
          >
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {city}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel sx={{ display: "flex", gap: "1rem" }}>
              <Input onChange={handleChange} />

              <Button
                sx={{
                  background: "#7678ed",
                  fontSize: "1rem",
                  padding: "1rem 2rem ",
                }}
                onMouseDown={handleClick}
                tabIndex={0}
              >
                {buttonText}
              </Button>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Tooltip>
    </div>
  );
};
export default Search;
