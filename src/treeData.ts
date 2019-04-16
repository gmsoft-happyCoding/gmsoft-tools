/*
 * @Description: 树型数据处理方法集
 * @Author: GM20171202
 * @Date: 2018-05-10 09:41:02
 * @Last Modified by: GM20171202
 * @Last Modified time: 2019-04-16 16:56:37
 */
import isArray from 'lodash/isArray';
import isNil from 'lodash/isNil';

/**
 * @description 将一维数组组装为多维数组及对应的 Map 结构
 * @example
 * new TreeData([]).init()
 * // => {treeData:[],treeMap:Map}
 * @class
 */
class TreeData {
  private metaArr: any[];
  private uidKey: string;
  private childArrKey: string;
  private itemKey: string;
  private treeItemKey: string;
  private pathStart: string;
  private groupMap: Map<string | number, any>;
  private nodesMap: Map<string | number, any>;
  /**
   * @description 构造器
   * 当节点属性isLeaf 为true时，子节点集值为null
   * @param {any[]} [metaArr=[]] - 传入的一维数组
   * @param {string} [uidKey='upId'] - 表示上级节点的 key
   * @param {string} [childArrKey='children'] - 表示子节点数组的 key
   * @param {string} [itemKey='id'] - 表示节点的主键的 key
   * @param {string} [treeItemKey='key'] - 表示树节点的主键的 key
   * @param {string} [pathStart=''] - path起始值
   */
  constructor(
    metaArr: any[] = [],
    uidKey: string = 'upId',
    childArrKey: string = 'children',
    itemKey: string = 'id',
    treeItemKey: string = 'key',
    pathStart: string = ''
  ) {
    // 传入的一维数组
    this.metaArr = metaArr;
    // 父节点相同的 Map 数据
    this.groupMap = new Map();
    // 所有节点 Map 数据
    this.nodesMap = new Map();
    // 表示上级节点的 key @default 'uid'
    this.uidKey = uidKey;
    // 表示子节点数组的 key @default 'children'
    this.childArrKey = childArrKey;
    // 表示表示节点的主键的 key @default 'id'
    this.itemKey = itemKey;
    // 表示树节点的主键的 key @default 'key'
    this.treeItemKey = treeItemKey;
    this.pathStart = pathStart;
  }

  /**
   * @description 初始化 - 执行转换方法
   * @param {string} rootKey - 顶级 节点uid
   * @returns {object} 组装好的数据
   */
  init = rootKey => {
    // 分类
    this.groupByUid();
    return {
      treeArr: this.getTreeData(this.groupMap.get(rootKey)),
      treeMap: this.nodesMap,
    };
  };

  // 依据 uid 分类
  groupByUid = () => {
    this.metaArr.map(item => {
      // 当前节点的父节点key
      const itemUid = item[this.uidKey];
      if (this.groupMap.has(itemUid)) {
        // if 已有 itemUid -> push
        this.groupMap.get(itemUid).push(item);
      } else {
        // else 没有 itemUid -> set
        this.groupMap.set(itemUid, [item]);
      }
    });
  };

  /**
   * @description 组装树型结构数据
   * @param {array} nodeArr - 节点数组 一维数组
   * @returns {array} 多维数组
   */
  getTreeData = nodeArr => {
    if (!nodeArr || !isArray(nodeArr) || nodeArr.length === 0) {
      return [];
    }
    const resultTreeArr: any[] = [];
    nodeArr.map(item => {
      const itemId = item[this.itemKey];
      let pidPath = this.pathStart;
      if (this.nodesMap.get(item[this.uidKey])) {
        pidPath = this.nodesMap.get(item[this.uidKey]).path;
      }
      // 先将path更新
      this.nodesMap.set(itemId, { ...item, path: `${pidPath}/${itemId}` });
      // 子节点集合
      const childrenNodes = item.isLeaf ? null : this.getTreeData(this.groupMap.get(itemId));
      // 构造新的当前节点
      const newItem = Object.assign({}, this.nodesMap.get(itemId), {
        [this.treeItemKey]: itemId,
        [this.childArrKey]: childrenNodes,
      });
      resultTreeArr.push(newItem);
      this.nodesMap.set(itemId, newItem);
    });
    return resultTreeArr;
  };

  /**
   * @description 传入Map数据构造树型结构数据
   * @author GM20171202
   * @param {Map} treeMap - 树型Map数据
   * @param {String} rootKey - 根节点key
   * @returns {Object} like {treeArr:Array,treeMap:Map}
   * @default {Object} like {treeArr:[],treeMap:new Map()}
   */
  renderByMap = (treeMap, rootKey) => {
    if (!isNil(treeMap) && treeMap.size !== 0) {
      [...treeMap.values()].map(item => {
        if (!this.metaArr.map(arrItem => arrItem[this.itemKey]).includes(item[this.itemKey])) {
          // 当前节点的父节点key
          const itemUid = item[this.uidKey];
          if (this.groupMap.has(itemUid)) {
            // if 已有 itemUid -> push
            this.groupMap.get(itemUid).push(item);
          } else {
            // else 没有 itemUid -> set
            this.groupMap.set(itemUid, [item]);
          }
        }
      });
      if (this.metaArr.length !== 0) {
        // if 执行renderByMap时传入了metaArr -> 先导入到this.groupMap中
        this.groupByUid();
      }
      return {
        treeArr: this.getTreeData(this.groupMap.get(rootKey)),
        treeMap: this.nodesMap,
      };
    }
    return {
      treeData: [],
      treeMap: new Map(),
    };
  };
}

export { TreeData as default };
