import * as React from 'react';
import defaultstyles from './Main.default.module.scss';
import styles from './Main.custom.module.scss';
import { IMainProps } from './IMainProps';
import { IMainState } from './IMAinState';
import { escape } from '@microsoft/sp-lodash-subset';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';

export default class Main extends React.Component<IMainProps, IMainState> {

  constructor(props: IMainProps, state: IMainState) {
    super(props, state);
    this.state = {
      defaultLayout:  false
    }

    this.initiateVariables();
  }
  
  private initiateVariables() { 
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  private handleInputChange(newValue: boolean) {
    this.setState({
      defaultLayout: newValue
    });
  }

  public render(): React.ReactElement<IMainProps> {

    let choosenLayout : any = {};

    if(this.state.defaultLayout) {
      choosenLayout = styles;
    }
    else {
      choosenLayout = defaultstyles;
    }

    return (
      <div>
            <Toggle
                defaultChecked={ this.state.defaultLayout }
                label={ 'Choose the layout' } 
                onText={ 'Yes' }
                offText={ 'No' }
                onChanged={ this.handleInputChange }
            />

            <div className={ choosenLayout.main }>
              <div className={ choosenLayout.container }>
                <div className={ choosenLayout.row }>
                  <div className={ choosenLayout.column }>
                    <span className={ choosenLayout.title }>Welcome to SharePoint!</span>
                    <p className={ choosenLayout.subTitle }>Customize SharePoint experiences using Web Parts.</p>
                    <p className={ choosenLayout.description }>{escape(this.props.description)}</p>
                    <a href="https://aka.ms/spfx" className={ choosenLayout.button }>
                      <span className={ choosenLayout.label }>Learn more</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>                       
      </div>  
    );
  }


  

}
