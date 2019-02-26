import * as React from 'react';
import styles from './Main.module.scss';
import { IMainProps } from './IMainProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Fabric } from "office-ui-fabric-react";
import { GroupedList } from 'office-ui-fabric-react/lib/components/GroupedList/index';


export default class Main extends React.Component<IMainProps, {}> {
  
  private items  = [];
  private groups = [];

  constructor() {
    super();
    
    this.items = [
      { key: String(0) },
      { key: String(1) },
      { key: String(2) },
      null, null,
      { key: String(5) },
      { key: String(6) },
      { key: String(7) },
      null, null, null, null, null, null, null
    ]; // partially filled items list
    
    this.groups = [{
      key: '1',
      name: 'Group1',
      startIndex: 0,
      count: 5
    }, {
      key: '2',
      name: 'Group2',
      startIndex: 5,
      count: 10
    }]
  }

  public render(): React.ReactElement<IMainProps> {
    let { items, groups } = this;    

    let groupProps = {
      getGroupItemLimit: this._getGroupItemLimit.bind(this),
      showAllProps: {
        onToggleSummarize: this._onShowAll.bind(this)
      }
    };

    return (
      <Fabric >
        <GroupedList
         items={ items }
         groups={ groups }
         groupProps={ groupProps }
         onRenderCell={ this._onRenderCell }
        />
      </Fabric>
    );
  }

  private _onRenderCell(nestingDepth?: number,
    item?: any,
    index?: number): React.ReactNode {
    return item && (
      <div>{ item.key }</div>
    );
  }
  
  private _getGroupItemLimit(group): number {
    return group.isShowingAll ? Infinity: 3;
  }

  private _onShowAll(group) {
    group.isShowingAll = true;
    this._fetchAllItems(group).then((newItems) => {;
      this.items = [ ...newItems ];
      this.groups = [ ...this.groups ];
      this.forceUpdate();
    });
  }
 
  // mimics fetching more items for this group from server
  private _fetchAllItems(group): Promise<any> {
    return new Promise<any>((resolve) => {
      let items = this.items;
      let start = group.startIndex;
      let end = group.startIndex + group.count - 1;
      for (let i=start; i<=end; i++) {
        items[i] = { key: String(i) };
      }
      setTimeout(() => { resolve(items); }, 1000);
    });
  }
}

