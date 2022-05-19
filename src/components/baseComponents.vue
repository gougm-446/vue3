<script lang="ts">
import { defineComponent, reactive, ref, toRefs, watch } from "vue";
import { CascaderProps, message } from "ant-design-vue";
import type { Dayjs } from "dayjs";
type RangeValue = [Dayjs, Dayjs];
const options: CascaderProps["options"] = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];
const plainOptions = ["Apple", "Pear", "Orange"];

export default defineComponent({
  setup() {
    const state = reactive({
      indeterminate: true,
      checkAll: false,
      checkedList: ["Apple", "Orange"],
    });

    const onCheckAllChange = (e: any) => {
      Object.assign(state, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
      });
    };
    watch(
      () => state.checkedList,
      (val) => {
        state.indeterminate = !!val.length && val.length < plainOptions.length;
        state.checkAll = val.length === plainOptions.length;
      }
    );

    const inputValue = ref<string>("");

    const radioValue = ref<string>("a");

    const handleChange = (value: string[]) => {
      console.log(`selected ${value}`);
    };

    const selectValue = ref(["a1", "b2"]);

    const success = () => {
      message.success("This is a success message");
    };
    const error = () => {
      message.error("This is an error message");
    };
    const warning = () => {
      message.warning("This is a warning message");
    };
    return {
      value: ref<string[]>([]),
      options,
      ...toRefs(state),
      plainOptions,
      onCheckAllChange,
      value1: ref<Dayjs>(),
      value2: ref<RangeValue>(),
      inputValue,
      radioValue,
      handleChange,
      selectValue,
      success,
      error,
      warning,
    };
  },
});
</script>

<template>
  <div>
    <div class="box">
      <h1>Cascader 级联选择</h1>
      <a-cascader
        style="width: 250px"
        v-model:value="value"
        :options="options"
        placeholder="请选择"
      />
    </div>
    <div class="box">
      <h1>Checkbox 多选框</h1>
      <div>
        <a-checkbox
          v-model:checked="checkAll"
          :indeterminate="indeterminate"
          @change="onCheckAllChange"
        >
          Check all
        </a-checkbox>
      </div>
      <a-checkbox-group v-model:value="checkedList" :options="plainOptions" />
    </div>
    <div class="box">
      <h1>DatePicker 日期选择框</h1>
      <div>
        <a-date-picker v-model:value="value1" style="margin-right: 36px" />
        <a-range-picker v-model:value="value2" />
      </div>
    </div>
    <div class="box">
      <h1>Input 输入框</h1>
      <div>
        <a-input
          style="width: 250px"
          v-model:value="inputValue"
          placeholder="Basic usage"
        />
      </div>
    </div>
    <div class="box">
      <h1>Radio 单选框</h1>
      <div>
        <a-radio-group v-model:value="radioValue" button-style="solid">
          <a-radio-button value="a">Hangzhou</a-radio-button>
          <a-radio-button value="b">Shanghai</a-radio-button>
          <a-radio-button value="c">Beijing</a-radio-button>
          <a-radio-button value="d">Chengdu</a-radio-button>
        </a-radio-group>
      </div>
    </div>

    <div class="box">
      <h1>Select 选择器</h1>
      <div>
        <a-select
          v-model:value="selectValue"
          mode="multiple"
          style="width: 300px"
          placeholder="Please select"
          allowClear
          :options="
            [...Array(25)].map((_, i) => ({
              value: (i + 10).toString(36) + (i + 1),
            }))
          "
          @change="handleChange"
        ></a-select>
      </div>
    </div>

    <div class="box">
      <h1>Message 全局提示</h1>
      <div>
        <a-space>
          <a-button @click="success">Success</a-button>
          <a-button @click="error">Error</a-button>
          <a-button @click="warning">Warning</a-button>
        </a-space>
      </div>
    </div>
  </div>
</template>

<style>
.box {
  margin-top: 24px;
}
</style>
