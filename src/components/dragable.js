/* eslint-disable react/jsx-props-no-spreading,react/prop-types,no-console */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { MenuOutlined } from "@ant-design/icons";

// eslint-disable-next-line react/prop-types,no-unused-vars
function SortableElement({ defaultList2, call }) {
  // React state to track order of items
  const [itemList, setItemList] = useState(defaultList2);
  // Function to update list on drop
  useEffect(() => {
    setItemList(defaultList2);
  }, [defaultList2]);
  const handleDrop = (droppedItem) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    const updatedList = [...itemList];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // Update State
    setItemList(updatedList);
    call(itemList);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="list-container">
          {(provided) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <div className="list-container" {...provided.droppableProps} ref={provided.innerRef}>
              {itemList.map((item, index) => (
                <div>
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {/* eslint-disable-next-line no-shadow */}
                    {(provided) => (
                      <div
                        className="item-container"
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >
                        <MenuOutlined />
                        <div className="text-item">{item.name}</div>
                      </div>
                    )}
                  </Draggable>
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default SortableElement;
