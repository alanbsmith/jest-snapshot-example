import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { Icon as BasicIcon } from '../../elements';

const modifierConfig = {
  left: () => `
    padding-right: 0.5rem;
  `,
  right: () => `
    padding-left: 0.5rem;
  `,
};

const Icon = styled(BasicIcon)`
  ${applyStyleModifiers(modifierConfig)}
`;

export default Icon;
