import {
  IconChevronLeft,
  IconChevronLeftPipe,
  IconChevronRight,
  IconChevronRightPipe,
} from "@tabler-icons";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Signal } from "@preact/signals";

interface PaginationButtonsProps {
  disabled: boolean;
  actualPage: Signal<number>;
  totalPages: number;
}

export default function PaginationButtons(props: PaginationButtonsProps) {
  const handleFirstPage = () => {
    props.actualPage.value = 1;
  };

  const handlePreviousPage = () => {
    props.actualPage.value = props.actualPage.value - 1;
  };

  const handleNextPage = () => {
    props.actualPage.value = props.actualPage.value + 1;
  };

  const handleLastPage = () => {
    props.actualPage.value = props.totalPages;
  };

  return (
    <div class="join">
      <button
        type="button"
        class="btn btn-secondary btn-sm join-item"
        disabled={!IS_BROWSER || props.disabled || props.actualPage.value === 1}
        onClick={handleFirstPage}
      >
        <IconChevronLeftPipe />
      </button>
      <button
        type="button"
        class="btn btn-secondary btn-sm join-item"
        disabled={!IS_BROWSER || props.disabled || props.actualPage.value === 1}
        onClick={handlePreviousPage}
      >
        <IconChevronLeft />
      </button>
      <button
        type="button"
        class="btn btn-ghost btn-sm join-item no-animation font-mono"
        disabled={!IS_BROWSER || props.disabled}
      >
        {props.actualPage}
      </button>
      <button
        type="button"
        class="btn btn-secondary btn-sm join-item"
        disabled={!IS_BROWSER || props.disabled ||
          props.actualPage.value === props.totalPages}
        onClick={handleNextPage}
      >
        <IconChevronRight />
      </button>
      <button
        type="button"
        class="btn btn-secondary btn-sm join-item"
        disabled={!IS_BROWSER || props.disabled ||
          props.actualPage.value === props.totalPages}
        onClick={handleLastPage}
      >
        <IconChevronRightPipe />
      </button>
    </div>
  );
}
