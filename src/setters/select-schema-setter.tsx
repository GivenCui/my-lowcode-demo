import React, { Component } from 'react';
import { Select } from '@alifd/next';
import { schema1, schema2 } from './testSchema'

interface SelectSetterProps {
  onChange: (value: string) => undefined;
  mode?: 'single' | 'multiple' | 'tag';
  defaultValue?: any;
}

const schemaMap = {
  1001: JSON.stringify(schema1),
  1002: JSON.stringify(schema2),
}

const formateOptions = (options: any[]) => {
  return options.map((item: any) => {
    if (item.children) {
      const children = item.children.map((child: any) => {
        return {
          label: child.title || child.label || '-',
          value: child.value,
          disabled: child.disabled || false,
        };
      });
      return {
        label: item.title || item.label || '-',
        children,
      };
    } else {
      return {
        label: item.title || item.label || '-',
        value: item.value,
        disabled: item.disabled || false,
      };
    }
  });
};

export default class SelectSchemaSetter extends Component<SelectSetterProps> {
  static defaultProps = {
    placeholder: '请选择',
    options: [{ label: '-', value: '' }],
    defaultValue: null as any,
    onChange: () => undefined as any,
  };

  static displayName = 'SelectSchemaSetter';

  constructor(props:SelectSetterProps) {
    super(props)
    this.state = {
      options: [],
      value: ''
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    // 模拟异步请求
    setTimeout(() => {
      const options = [
        {
          title: '表单一',
          value: '1001'
        },
        {
          title: '表单二',
          value: '1002'
        }
      ]
  
      this.setState({
        options
      })
    }, 3000)
  }

  onChangeHandle = (val) => {
    const { onChange } = this.props;
    onChange && onChange(JSON.parse(schemaMap[val]));
    this.setState({
      value: val
    })
  }

  render() {
    const { mode } = this.props;
    const {options, value} = this.state;
    console.log('render', value);
    return (
      <Select
        autoWidth={false}
        size="small"
        value={value}
        dataSource={formateOptions(options)}
        mode={mode}
        onChange={this.onChangeHandle}
        style={{ width: '100%' }}
      />
    );
  }
}
