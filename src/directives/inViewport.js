export default {
    name: "vpshow",
    // Директива имеет набор хуков жизненного цикла:
    // вьізьівается до привязки атрибутов или слушателей собьітий к элементу
    created(el, binding) {
        // console.log("created", binding);
    },
    // вьізьівается перед монтированием компонента, в котором находится элемент с директивой
    beforeMount(el, binding) {
        // console.log("beforeMount", binding);
    },
    // вьізьівается после монтирования компонента, в котором находится элемент с директивой
    mounted(el, binding) {
        // console.log("mounted", binding);
    },
    // вьізьівается перед обновлением VNode родительского компонента
    beforeUpdate(el, binding) {
        // console.log("beforeUpdate", binding);

    },
    // вьізьівается после обновления VNode родительского компонента и VNodes его дочерних элементов
    updated(el, binding) {
        // console.log("updated", binding);
        if (binding.value === binding.oldValue || binding.oldValue === undefined) {
            return null;
        } else if (binding.value) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        } else {
            el.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
            });
        }
    },
    // вьізьівается перед тем, как будет размонтирован родительский компонент
    beforeUnmount(el, binding) {
        // console.log("beforeUnmount", binding);
    },
    // вьізьівается после того, как будет размонтирован родительский компонент
    unmounted(el, binding) {
        // console.log("unmounted", binding);
    },
};
