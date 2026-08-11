import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  headerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  nomeCliente: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#111827',
  },
  valor: {
    fontWeight: 'bold',
    color: '#16a34a',
  },
  data: {
    color: '#6b7280',
    fontSize: 12,
    marginBottom: 8,
  },
  secaoEndereco: {
    marginBottom: 8,
  },
  textoEndereco: {
    fontSize: 13,
    color: '#374151',
  },
  negrito: {
    fontWeight: '600',
  },
  boxProdutos: {
    backgroundColor: '#f3f4f6',
    padding: 8,
    borderRadius: 6,
    marginBottom: 8,
  },
  tituloProdutos: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4b5563',
  },
  textoProdutos: {
    fontSize: 12,
    color: '#6b7280',
  },
  footerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  textoFooter: {
    fontSize: 12,
    color: '#6b7280',
  },
});