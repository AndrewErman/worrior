/** @jsx jsx */
import * as React from "react";
import { css, jsx } from "@emotion/core";
import { Category } from "../../domain";
import { SideTableItem } from "./SideTableItem";
import { TotalItemsInCategory } from "../../shell/hooks/useShellState";

const sideTable = css`
  display: flex;
  flex-wrap: wrap;
`;

type Props = {
    stats: TotalItemsInCategory;
    data: Category[];
    onMenuItemSelected: (item: Category) => void;
};

export const SideTable: React.FunctionComponent<Props> = (props) => {
    return (
        <div css={sideTable}>

            {props.data.map((item) => {
                return (
                    <SideTableItem
                        count={props.stats[item.id]}
                        category={item}
                        key={item.id}
                        onClick={props.onMenuItemSelected}
                    />

                );
            })}
        </div>
    );
};
