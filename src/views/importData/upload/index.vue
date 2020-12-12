<template>
  <div class="app-container">
    <h2>文件上传</h2>
    <choose-file :on-success="handleChoose" />
    <el-table
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column
        align="center"
        label="序号"
        width="65"
        type="index"
        element-loading-text="数据加载中"
      />
      <el-table-column min-width="300" align="center" label="文件名">
        <template slot-scope="scope">
          <span>{{ scope.row.filename }}</span>
        </template>
      </el-table-column>

      <el-table-column width="100" label="大小">
        <template slot-scope="{ row }">
          <span>{{ row.size }}</span>
        </template>
      </el-table-column>

      <el-table-column width="110px" align="center" label="状态">
        <template slot-scope="scope">
          <span>{{ scope.row.status }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import ChooseFile from '@/components/ChooseFile/index'

export default {
  components: {
    ChooseFile
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    handleChoose(file) {
      const { name: filename, size } = file
      this.list.push({ filename, size: `${(size / 1024).toFixed(2)}kb`, status: '待上传' })
    },
    handleDelete(v) {
      const { $index } = v
      this.list.splice($index, 1)
    }
  }
}
</script>
