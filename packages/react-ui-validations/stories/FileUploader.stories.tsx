import { storiesOf } from '@storybook/react';
import React from 'react';
import { FileUploader } from '@skbkontur/react-ui/components/FileUploader';
import { UploadFile } from '@skbkontur/react-ui/lib/fileUtils';

import { ValidationContainer, ValidationInfo, ValidationWrapper } from '../src';
import { Nullable } from '../typings/Types';

storiesOf('FileUploader', module).add('required', () => <FileUploaderStory />);

interface FileUploaderStoryState {
  value: UploadFile[];
}

class FileUploaderStory extends React.Component<{}, FileUploaderStoryState> {
  public state: FileUploaderStoryState = {
    value: [],
  };

  public validateValue(): Nullable<ValidationInfo> {
    const { value } = this.state;
    if (!value.length) {
      return { message: 'Поле обязательно', type: 'lostfocus' };
    }
    return null;
  }

  public render() {
    return (
      <div style={{ padding: '20px 20px' }}>
        <ValidationContainer>
          <ValidationWrapper validationInfo={this.validateValue()}>
            <FileUploader
              multiple
              onValueChange={(files) => this.setState({ value: files })}
            />
          </ValidationWrapper>
        </ValidationContainer>
      </div>
    );
  }
}
