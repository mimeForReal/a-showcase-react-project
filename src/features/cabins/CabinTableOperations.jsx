import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          {
            value: "all",
            label: "All",
          },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "regularPrice-asc", label: "Price (low first)" },
          { value: "regularPrice-desc", label: "Price (high first)" },
          { value: "maxCapacity-asc", label: "Capacity (low first)" },
          { value: "maxCapacity-desc", label: "Capacity (high first)" },
          { value: "name-asc", label: "Name (A - Z)" },
          { value: "name-desc", label: "Name (Z - A)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
