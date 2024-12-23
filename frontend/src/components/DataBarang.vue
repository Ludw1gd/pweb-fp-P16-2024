DATABARANG.VUE

<script>
export default {
  data() {
    return {
      Item: [],
      newItem: {
        name: '',
        amount: '',
        condition: '',
        created_at: '',
      },
      showModal: false,
      isEditing: false,
      editIndex: null, 
    };
  },
  methods: {
    addItem() {
      if (this.isEditing) {
        this.items.splice(this.editIndex, 1, { ...this.newItem });
        this.isEditing = false;
        this.editIndex = null;
      } else {
        const newId = this.items.length ? this.items[this.items.length - 1].id + 1 : 1;
        this.items.push({ ...this.newItem, id: newId });
      }
      this.closeModal();
    },
    editItem(id) {
      const index = this.items.findIndex(item => item.id === id);
      if (index !== -1) {
        this.newItem = { ...this.items[index] };
        this.isEditing = true;
        this.editIndex = index;
        this.showModal = true;
      }
    },
    deleteItem(id) {
      this.items = this.items.filter(item => item.id !== id);
      this.sortItemsByDate();
    },
    closeModal() {
      this.showModal = false;
      this.resetForm();
    },
    resetForm() {
      this.newItem = {
        name: '',
        amount: '',
        condition: '',
        created_at: '',
      };
    },
  },
};
</script>