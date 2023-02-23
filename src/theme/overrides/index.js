import Button from './Button';
import { merge } from 'lodash';
export default function ComponentsOverrides(theme) {
	return merge(Button(theme));
}
