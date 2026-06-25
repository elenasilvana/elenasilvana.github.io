import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface StyledDivider {
 component: string;
}

interface StyledContainer {
    flex?: boolean;
    width?: string | number;
    flexWrap?: boolean;
    justifyContent?: 'flex-start' | 'center'
}

interface StyledTypography {
    textTransform: 'capitalized' | 'uppercase';
    fontStyle?: 'italic'
}

export const IconContainer = styled(Box)({
    paddingRight: 8, 
    alignSelf: 'center'
})

export const DividerContainer = styled(Box)<StyledDivider>({
    fontWeight: 'bold'
})

export const Container = styled(Box)<StyledContainer>(({flex, width, flexWrap, justifyContent})=>({
    display: flex ? 'flex' : undefined,
    width: width || undefined,
    flexWrap: flexWrap ? 'wrap' : undefined,
    justifyContent: justifyContent || undefined
}))

export const TransformedTypography = styled(Typography)<StyledTypography>(({textTransform, fontStyle})=>({
   textTransform: textTransform || undefined,
   fontStyle: fontStyle || undefined
}))