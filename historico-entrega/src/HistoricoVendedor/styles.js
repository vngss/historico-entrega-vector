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
    alignItems: 'center',
    marginBottom: 8,
  },
  nomeProduto: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#111827',
    flex: 1,
  },
  badgeStatus: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  textoStatus: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  data: {
    color: '#6b7280',
    fontSize: 12,
    marginBottom: 6,
  },
  textoDetalhe: {
    fontSize: 13,
    color: '#374151',
    marginBottom: 4,
  },
  negrito: {
    fontWeight: '600',
  },
});