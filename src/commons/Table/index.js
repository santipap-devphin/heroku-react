import React from "react";
import PropTypes from "prop-types";
import { TableStyle } from "./style";

const PageTable = ({
  rowKey,
  columns,
  data,
  rowSelection,
  total,
  onChange,
  onChangeOrder,
  page,
  size,
}) => {
  return (
    <TableStyle
      rowKey={rowKey}
      columns={columns}
      dataSource={data}
      rowSelection={rowSelection}
      pagination={{
        defaultPageSize: size ? size : 10,
        showSizeChanger: total <= 10 ? false : true,
        showQuickJumper: true,
        total: total,
        defaultCurrent: page ? page : 1,
        onChange: (page, length) => {
          onChange((page - 1) * length, length, "", page, length);
        },
        showTotal: (total) => `Total ${total} items`,
        pageSizeOptions: ["10", "20", "30"],
        onShowSizeChange: (page, length) => {
          onChange(0 * length, length, "", 1, length);
        },
      }}
      onChange={onChangeOrder}
    />
  );
};

PageTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array,
  rowSelection: PropTypes.object,
  onChange: PropTypes.func,
  rowKey: PropTypes.func,
  total: PropTypes.number,
  page: PropTypes.number,
  size: PropTypes.number,
};
PageTable.defaultProps = {
  className: "",
};
export default PageTable;
