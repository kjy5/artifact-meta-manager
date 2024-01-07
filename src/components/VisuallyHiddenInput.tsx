import { styled } from '@mui/material';

const VisuallyHiddenInput = styled('input', { shouldForwardProp: (_) => true })({
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default VisuallyHiddenInput;
