import * as React from 'react';
import Table from './ComponentTable';
import { ReactComponentLike } from 'prop-types';

export interface StatesCombinatorProps<T> {
  states: Array<Partial<T>>;
  sizeX: number;
  sizeY: number;
  component: ReactComponentLike;
  presetState: Partial<T>;
}

export default class<T extends {}> extends React.Component<
  StatesCombinatorProps<T>,
  {
    page: number;
  }
> {
  public static defaultProps = {
    states: [],
    sizeX: 0,
    sizeY: 0,
  };

  public state = {
    page: 0,
  };

  public render() {
    const { page } = this.state;
    const { states, sizeX, sizeY, component, presetState } = this.props;
    const cols = states.slice();
    const rows = states.slice();
    const pages = [];

    for (let row = 0; row < rows.length; row += sizeY) {
      for (let col = 0; col < cols.length; col += sizeX) {
        pages.push({
          offsetX: col,
          offsetY: row,
        });
      }
    }
    const pageOffsets = pages[page];
    return (
      <div>
        <div id="paginator">
          <button disabled={page === 0} id="prev-page" onClick={this.prevPage}>
            Prev
          </button>{' '}
          <small>{`${page + 1} / ${pages.length}`}</small>{' '}
          <button disabled={page + 1 >= pages.length} id="next-page" onClick={this.nextPage}>
            Next
          </button>
        </div>
        <div>
          {pageOffsets && (
            <Table
              rows={rows.slice(pageOffsets.offsetY, pageOffsets.offsetY + sizeY)}
              cols={cols.slice(pageOffsets.offsetX, pageOffsets.offsetX + sizeX)}
              presetState={presetState}
              component={component}
            />
          )}
        </div>
      </div>
    );
  }

  private prevPage = () => {
    this.setState(({ page }) => ({
      page: page - 1,
    }));
  };

  private nextPage = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };
}
