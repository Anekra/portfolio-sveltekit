import { hoverAble } from '$lib/stores/hoverAble';

/**
	 * @param {MouseEvent} e - The mouse event.
	 */
export function handleHover(e) {
  if (e.type === 'mouseover') {
    hoverAble.update(() => true);
  } else if (e.type === 'mouseleave') {
    hoverAble.update(() => false);
  }
}