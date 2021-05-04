<script>
export default {
  // https://vuejs.org/v2/guide/render-function.html#Functional-Components
  functional: true,
  props: {
    x: {
      type: Number,
      default: 0,
    },
    y: {
      type: Number,
      default: 0,
    },
    z: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: 'black',
    },
    rotation: {
      type: Object,
      default: () => ({
        x: 0,
        y: 0,
        z: 0,
      }),
    },
  },
  // Render function: https://vuejs.org/v2/guide/render-function.html
  // using JSX: https://github.com/vuejs/babel-plugin-transform-vue-jsx
  render(h, { props }) {
    const { x, y, z, color, rotation } = props
    return (
      <a-entity position={`${x} ${y} ${z}`}>
        {/* https://aframe.io/docs/0.8.2/core/entity.html */}
        <a-entity
          // Rotate the triangle in a wrapper entity, relatively positioned
          // to the parent entity above
          rotation={`${rotation.x || 0} ${rotation.y || 0} ${rotation.z || 0}`}
        >
          {/* The front face of the triangle */}
          {/* https://aframe.io/docs/0.8.0/primitives/a-triangle.html */}
          <a-triangle
            vertex-a="0 1 0"
            vertex-b="-1 -1 0"
            vertex-c="1 -1 0"
            color={color}
          />

          {/* The other faces of the triangle */}
          <a-triangle
            vertex-a="0 0 -2"
            vertex-b="-1 -1 0"
            vertex-c="0 1 0"
            color={color}
          />
          <a-triangle
            vertex-a="1 -1 0"
            vertex-b="0 0 -2"
            vertex-c="0 1 0"
            color={color}
          />
          <a-triangle
            vertex-a="1 -1 0"
            vertex-b="-1 -1 0"
            vertex-c="0 0 -2"
            color={color}
          />
        </a-entity>
      </a-entity>
    )
  },
}
</script>
