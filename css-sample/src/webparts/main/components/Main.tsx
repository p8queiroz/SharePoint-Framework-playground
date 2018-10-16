import * as React from 'react';
import defaultstyles from './Main.default.module.scss';
import styles from './Main.module.scss';
import { IMainProps } from './IMainProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Main extends React.Component<IMainProps, {}> {
  public render(): React.ReactElement<IMainProps> {
    let test = "this is the test";
    return (
      <div>
            <div className={  test + ` ` +  styles.main1 }>
              <div className={ styles.container }>
                <div className={ styles.row }>
                  <div className={ styles.column }>
                    <span className={ styles.title }>Welcome to SharePoint!</span>
                    <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
                    <p className={ styles.description }>{escape(this.props.description)}</p>
                    <a href="https://aka.ms/spfx" className={ styles.button }>
                      <span className={ styles.label }>Learn more</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={ styles.main2 }>
              <div className={ styles.container }>
                <div className={ styles.row }>
                  <div className={ styles.column }>
                    <span className={ styles.title }>Welcome to SharePoint!</span>
                    <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
                    <p className={ styles.description }>{escape(this.props.description)}</p>
                    <a href="https://aka.ms/spfx" className={ styles.button }>
                      <span className={ styles.label }>Learn more</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={ defaultstyles.main }>
              <div className={ defaultstyles.container }>
                <div className={ defaultstyles.row }>
                  <div className={ defaultstyles.column }>
                    <span className={ defaultstyles.title }>Welcome to SharePoint!</span>
                    <p className={ defaultstyles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
                    <p className={ defaultstyles.description }>{escape(this.props.description)}</p>
                    <a href="https://aka.ms/spfx" className={ defaultstyles.button }>
                      <span className={ defaultstyles.label }>Learn more</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
      </div>
     
    );
  }
}
