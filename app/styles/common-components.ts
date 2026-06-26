import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface StyledDivider {
 component: string;
 fontWeight?: string | number
 color?: string;
}

interface StyledContainer {
    flex?: boolean;
    width?: string | number;
    flexWrap?: boolean;
    justifyContent?: 'flex-start' | 'center';
    flexDirection?: 'column' | 'row';
    height?: string | number;
    alignSelf?: string;
}

interface StyledTypography {
    textTransform: 'capitalize' | 'uppercase';
    fontStyle?: 'italic';
    color?: string;
}

export const IconContainer = styled(Box)({
    paddingRight: 8, 
    alignSelf: 'center'
})

export const DividerContainer = styled(Box)<StyledDivider>(({fontWeight, color}) =>({
    fontWeight: fontWeight || 'bold',
    color: color || undefined,
}))

export const Container = styled(Box)<StyledContainer>(({flex, width, flexWrap, justifyContent, flexDirection, alignSelf, height})=>({
    display: flex ? 'flex' : undefined,
    width: width || undefined,
    flexWrap: flexWrap ? 'wrap' : undefined,
    justifyContent: justifyContent || undefined,
    flexDirection: flexDirection || undefined,
    alignSelf: alignSelf || undefined,
    height: height || undefined
}))

export const TransformedTypography = styled(Typography)<StyledTypography>(({textTransform, fontStyle, color})=>({
   textTransform: textTransform || undefined,
   fontStyle: fontStyle || undefined,
   color: color || undefined
}))