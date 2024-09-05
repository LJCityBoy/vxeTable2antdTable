<template>
  <vxe-grid
    :data="dataSource"
    :columns="vxColumns"
    :height="props.scroll?.y || '100%'"
    :width="'100%'"
    :showOverflow="true"
    :border="props.bordered"
    :loading="props.loading"
    :checkboxConfig="{
      labelField: 'id',
      indeterminateField: 'isIndeterminate'
    }"
    :treeConfig="{
      rowField: props.rowKey,
      childrenField: props.childrenColumnName,
    }"
    :scrollY="{
      enabled: props.virtualized,
      gt: 0,
    }"
    :scrollX="{
      enabled: props.virtualized,
      gt: 0,
    }"
  >
    <template
      v-for="(vxColum, idx) in vxColumns"
      #[vxColum.field]="record"
      :key="vxColum.field"
    >
      <slot
        name="bodyCell"
        v-bind="{
          text: record.row[vxColum.field],
          record: record.row,
          column: props.columns[idx],
          index: record.rowIndex,
        }"
        >{{ record.row[vxColum.field] }}</slot
      >
    </template>
  </vxe-grid>
</template>

<script lang="ts" setup>
import { PropType, computed } from "vue";
import { TableProps } from "ant-design-vue";
import { DefaultRecordType } from "ant-design-vue/es/vc-table/interface";
import { isTreeNestedStructure } from "@/utils/tools.ts";

const props = defineProps({
  dataSource: {
    type: Array as PropType<TableProps["dataSource"]>,
    default: () => [],
  },
  columns: {
    type: Array as PropType<DefaultRecordType[]>,
    default: () => [],
  },
  scroll: {
    type: Object as PropType<TableProps["scroll"]>,
    default: () => ({}),
  },
  //是否开启虚拟列表,默认开启
  virtualized: {
    type: Boolean,
    default: true,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  childrenColumnName: {
    type: String,
    default: "children",
  },
  rowKey: {
    type: String,
    default: "id",
  },
  rowSelection: {
    type: Object as PropType<TableProps["rowSelection"]>,
    default: () => ({}),
  },
});

const vxColumns = computed(() => {
  const arr: DefaultRecordType[] = [];
  props.columns.forEach((column, index) => {
    arr.push({
      title: column.title,
      dataIndex: column.dataIndex,
      key: column.dataIndex,
      field: column.dataIndex,
      width: column.width || undefined,
      align: column.align || "left",
      type: index === 0 ? props.rowSelection?.type : undefined,
      treeNode:
        index === 0 &&
        isTreeNestedStructure(props.dataSource || [], props.childrenColumnName),

      slots: { default: column.dataIndex },
    });
  });
  return arr;
});
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
