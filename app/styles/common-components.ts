import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

interface StyledDivider {
 component: string;
}

export const IconContainer = styled(Box)({
    paddingRight: 8
})

export const DividerContainer = styled(Box)<StyledDivider>({
    fontWeight: 'bold'
})