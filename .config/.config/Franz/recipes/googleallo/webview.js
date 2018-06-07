'use strict';

module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;

    const elements = document.querySelectorAll('.unreadCount');
    for (let i = 0; i < elements.length; i += 1) {
      if (parseInt(elements[i].innerHTML, 10) !== 0) {
        count += 1;
      }
    }

    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2dsZWFsbG8vd2Vidmlldy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiRnJhbnoiLCJnZXRNZXNzYWdlcyIsImNvdW50IiwiZWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJpbm5lckhUTUwiLCJzZXRCYWRnZSIsImxvb3AiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLE9BQVAsR0FBa0JDLEtBQUQsSUFBVztBQUMxQixRQUFNQyxjQUFjLFNBQVNBLFdBQVQsR0FBdUI7QUFDekMsUUFBSUMsUUFBUSxDQUFaOztBQUVBLFVBQU1DLFdBQVdDLFNBQVNDLGdCQUFULENBQTBCLGNBQTFCLENBQWpCO0FBQ0EsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlILFNBQVNJLE1BQTdCLEVBQXFDRCxLQUFLLENBQTFDLEVBQTZDO0FBQzNDLFVBQUlFLFNBQVNMLFNBQVNHLENBQVQsRUFBWUcsU0FBckIsRUFBZ0MsRUFBaEMsTUFBd0MsQ0FBNUMsRUFBK0M7QUFDN0NQLGlCQUFTLENBQVQ7QUFDRDtBQUNGOztBQUVERixVQUFNVSxRQUFOLENBQWVSLEtBQWY7QUFDRCxHQVhEOztBQWFBRixRQUFNVyxJQUFOLENBQVdWLFdBQVg7QUFDRCxDQWZEIiwiZmlsZSI6Imdvb2dsZWFsbG8vd2Vidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKEZyYW56KSA9PiB7XG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gZnVuY3Rpb24gZ2V0TWVzc2FnZXMoKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVucmVhZENvdW50Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHBhcnNlSW50KGVsZW1lbnRzW2ldLmlubmVySFRNTCwgMTApICE9PSAwKSB7XG4gICAgICAgIGNvdW50ICs9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRnJhbnouc2V0QmFkZ2UoY291bnQpO1xuICB9O1xuXG4gIEZyYW56Lmxvb3AoZ2V0TWVzc2FnZXMpO1xufTtcbiJdfQ==