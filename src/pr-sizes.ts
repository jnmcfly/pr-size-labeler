import { getInput } from '@actions/core';

export enum Size {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
}

export const getPrSizeInputs = () => {
  return {
    [Size.XS]: {
      diff: parseInt(getInput('xs_diff'), 10),
      label: getInput('xs_label'),
      color: getInput('xs_color'),
    },
    [Size.S]: {
      diff: parseInt(getInput('s_diff'), 10),
      label: getInput('s_label'),
      color: getInput('s_color'),
    },
    [Size.M]: {
      diff: parseInt(getInput('m_diff'), 10),
      label: getInput('m_label'),
      color: getInput('m_color'),
    },
    [Size.L]: {
      diff: parseInt(getInput('l_diff'), 10),
      label: getInput('l_label'),
      color: getInput('l_color'),
    },
    [Size.XL]: {
      diff: Number.MAX_SAFE_INTEGER,
      label: getInput('xl_label'),
      color: getInput('xl_color'),
    },
  };
};
