import * as React from 'react';
import createReactContext from 'create-react-context';
import ZIndexStorage, { LayerComponentName } from './ZIndexStorage';

const ZIndexContext = createReactContext({ parentLayerZIndex: 0, maxZIndex: Infinity });

export interface ZIndexProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Приращение к z-index
   */
  delta: number;
  priority: number | LayerComponentName;
  style: React.CSSProperties;
  render?: boolean;
  shouldResetZIndexFromContext?: boolean;
  shouldCreateStackingContext?: boolean;
  sholudCoverChildren?: boolean;
  className?: string;
  wrapperRef?: React.Ref<HTMLDivElement> | undefined | null;
}

export default class ZIndex extends React.Component<ZIndexProps> {
  public static defaultProps = {
    render: true,
    delta: 10,
    priority: 0,
    style: {},
    shouldResetZIndexFromContext: false,
    sholudCoverChildren: false,
    shouldCreateStackingContext: false,
  };

  private zIndex: number = 0;

  constructor(props: ZIndexProps) {
    super(props);
    this.zIndex = ZIndexStorage.incrementZIndex(props.priority, props.delta);
  }

  public componentWillUnmount() {
    ZIndexStorage.removeZIndex(this.zIndex);
  }

  public render(): JSX.Element {
    const {
      render,
      style,
      children,
      delta,
      priority,
      shouldResetZIndexFromContext,
      sholudCoverChildren,
      shouldCreateStackingContext,
      wrapperRef,
      ...props
    } = this.props;
    if (shouldCreateStackingContext) {
      'isolation' in document.body.style ? (style.isolation = 'isolate') : (style.transform = 'rotate(0)');
    }
    return (render ? (
      <ZIndexContext.Consumer>
        {({ parentLayerZIndex, maxZIndex }) => {
          let summaryZIndex = this.zIndex;

          if (Number.isFinite(maxZIndex)) {
            const allowedValuesIntervalLength = maxZIndex - parentLayerZIndex;
            const scale = ZIndexStorage.upperBorder / allowedValuesIntervalLength;
            summaryZIndex = Math.ceil(this.zIndex / scale);
          }

          summaryZIndex += parentLayerZIndex;

          return (
            <ZIndexContext.Provider
              value={{
                parentLayerZIndex: this.props.shouldResetZIndexFromContext ? 0 : summaryZIndex,
                maxZIndex: sholudCoverChildren || Number.isFinite(maxZIndex) ? summaryZIndex : Infinity,
              }}
            >
              <div style={{ ...style, zIndex: summaryZIndex }} ref={wrapperRef} {...props}>
                {children}
              </div>
            </ZIndexContext.Provider>
          );
        }}
      </ZIndexContext.Consumer>
    ) : (
      children
    )) as JSX.Element;
  }
}
