import {
  IconChevronLeft,
  IconChevronLeftPipe,
  IconChevronRight,
  IconChevronRightPipe,
} from "@tabler-icons";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface PaginationButtonsProps {
  disabled: boolean;
  page: number;
  totalPages: number;
  onFirstPage: () => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
  onLastPage: () => void;
}

export default function PaginationButtons(props: PaginationButtonsProps) {
  return (
    <div class="join">
      <button
        type="button"
        class="btn btn-secondary btn-sm join-item"
        disabled={!IS_BROWSER || props.disabled || props.page === 1}
        onClick={props.onFirstPage}
      >
        <IconChevronLeftPipe />
      </button>
      <button
        type="button"
        class="btn btn-secondary btn-sm join-item"
        disabled={!IS_BROWSER || props.disabled || props.page === 1}
        onClick={props.onPreviousPage}
      >
        <IconChevronLeft />
      </button>
      <button
        type="button"
        class="btn btn-ghost btn-sm join-item no-animation font-mono"
        disabled={!IS_BROWSER || props.disabled}
      >
        {props.page}
      </button>
      <button
        type="button"
        class="btn btn-secondary btn-sm join-item"
        disabled={!IS_BROWSER || props.disabled ||
          props.page === props.totalPages}
        onClick={props.onNextPage}
      >
        <IconChevronRight />
      </button>
      <button
        type="button"
        class="btn btn-secondary btn-sm join-item"
        disabled={!IS_BROWSER || props.disabled ||
          props.page === props.totalPages}
        onClick={props.onLastPage}
      >
        <IconChevronRightPipe />
      </button>
    </div>
  );
}
