<template>
  <div class="test">
    <Vxe2AntdTable
      :dataSource="dataSource"
      :columns="tableColumns"
      :scroll="{ y: '60%' }"
      :bordered="true"
      :rowSelection="{
        type: 'checkbox',
      }"
      @cell-click="handleCellClick"
    >
      <template #bodyCell="{ column, record }">
        <div v-if="column.dataIndex === 'age'">
          <a-input v-model:value="record.age"></a-input>
        </div>
      </template>
    </Vxe2AntdTable>
  </div>
</template>

<script lang="ts" setup>
import Vxe2AntdTable from "@/components/Vxe2AntdTable.vue";

const dataSource = Array.from(
  Array(500).fill({
    id: 27,
    name: "蒋",
    age: 34,
    children: [
      {
        id: "jk",
        name: "蒋",
        age: 34,
        children: [{ id: "2jk", name: "蒋", age: 34 }],
      },
    ],
  }),
  (item, index) => ({
    ...item,
    id: index,
    name: `蒋${index}`,
    children: index < 4 ? [{ id: "2jk", name: "蒋", age: 34 }] : [],
  })
);
// console.log(dataSource, "++++=");

const tableColumns = [
  { dataIndex: "id", title: "单号", key: "key" },
  { dataIndex: "name", title: "名称", key: "name" },
  { dataIndex: "age", title: "数量", key: "age" },
];

const handleCellClick = (prom: any) => {
  console.log(prom, "handleCellClick");
};
</script>

<style scoped>
.test {
  height: 100%;
  width: 100%;
}
</style>
