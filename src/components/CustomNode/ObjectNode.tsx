import React from "react";
import { ConditionalWrapper, CustomNodeProps } from "src/components/CustomNode";
import useConfig from "src/hooks/store/useConfig";
import * as Styled from "./styles";

const ObjectNode: React.FC<CustomNodeProps<[string, string][]>> = ({
  width,
  height,
  value,
  x,
  y,
}) => {
  const performance = useConfig((state) => state.settings.performance);

  return (
    <Styled.StyledForeignObject width={width} height={height} x={0} y={0}>
      <ConditionalWrapper condition={performance}>
        <Styled.StyledText width={width} height={height}>
          {value.map(
            (val, idx) =>
              val[1] && (
                <Styled.StyledRow
                  data-key={val[1]}
                  data-x={x}
                  data-y={y}
                  key={idx}
                  width={width}
                >
                  <Styled.StyledKey objectKey>{val[0]}: </Styled.StyledKey>
                  {val[1]}
                </Styled.StyledRow>
              )
          )}
        </Styled.StyledText>
      </ConditionalWrapper>
    </Styled.StyledForeignObject>
  );
};

export default ObjectNode;
