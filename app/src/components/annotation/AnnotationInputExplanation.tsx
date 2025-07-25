import { FocusScope } from "react-aria";
import { Button as AriaButton } from "react-aria-components";
import { css } from "@emotion/react";

import {
  Button,
  Dialog,
  DialogTrigger,
  Flex,
  Input,
  Label,
  Popover,
  PopoverArrow,
  Text,
  TextField,
  View,
} from "@phoenix/components";
import { Annotation } from "@phoenix/components/annotation";
import { EXPLANATION_LABEL_WIDTH } from "@phoenix/components/annotation/constants";

export const AnnotationInputExplanation = ({
  annotation,
  onSubmit,
}: {
  annotation?: Annotation;
  onSubmit?: (explanation: string) => void;
}) => {
  const fieldName = annotation?.name
    ? `${annotation.name}.explanation`
    : "explanation";

  return (
    <DialogTrigger>
      <AriaButton
        excludeFromTabOrder
        type="button"
        isDisabled={!annotation?.id}
        className="annotation-input-explanation"
        css={css`
          position: absolute;
          top: 6px;
          right: 0;
          width: ${EXPLANATION_LABEL_WIDTH};
          font-size: var(--ac-global-dimension-static-font-size-75);
          background: none;
          border: none;
          padding: 0 !important;
          line-height: unset;
          color: var(--ac-global-link-color);
          &:disabled {
            cursor: default;
            opacity: var(--ac-opacity-disabled);
            color: var(--ac-global-text-color-900);
          }
          &:hover:not(:disabled) {
            text-decoration: underline;
            cursor: pointer;
            background: none;
          }
        `}
      >
        explain
      </AriaButton>
      <Popover placement="bottom end">
        <PopoverArrow />
        <Dialog>
          {({ close }) => (
            <FocusScope autoFocus contain restoreFocus>
              <View padding="size-100">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    const explanation = formData.get(fieldName);
                    if (typeof explanation === "string") {
                      onSubmit?.(explanation);
                    }
                    close();
                  }}
                >
                  <Flex direction="column" gap="size-100">
                    <TextField
                      name={fieldName}
                      defaultValue={annotation?.explanation ?? ""}
                      css={{
                        minWidth: "300px",
                      }}
                    >
                      <Label>Explanation</Label>
                      <Input />
                      <Text slot="description">
                        Why did you give this score?
                      </Text>
                    </TextField>
                    <Button type="submit" variant="primary" size="S">
                      Save
                    </Button>
                  </Flex>
                </form>
              </View>
            </FocusScope>
          )}
        </Dialog>
      </Popover>
    </DialogTrigger>
  );
};
