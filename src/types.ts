export interface AntdResolverOptions {
  /**
   * 组件前缀
   * @description 例如使用前缀 A，Button 自动导入改为 AButton
   */
  prefix?: string
  /**
   * 包名
   * @default antd
   */
  packageName?: string
}
